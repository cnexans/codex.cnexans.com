-- callout-numbers.lua
-- Para Pandoc standalone: convierte fenced divs (.callout-*) en
-- tcolorbox con borde izquierdo coloreado, fondo, y numeración automática.
--
-- Colores (definidos en header.tex):
--   tip       → verde  (Axioma)
--   important → naranja (Definición)
--   note      → azul   (Teorema / Lema / Proposición / Corolario / Ejemplo / Método)
--   caution   → gris   (Demostración, con QED)

local axioma_count  = 0
local def_count     = 0
local result_count  = 0
local metodo_count  = 0

-- Color mapping
local colors = {
  ['callout-tip']       = { border = 'quarto-callout-tip-color',       bg = 'quarto-callout-tip-color!8' },
  ['callout-important'] = { border = 'quarto-callout-important-color', bg = 'quarto-callout-important-color!8' },
  ['callout-note']      = { border = 'quarto-callout-note-color',      bg = 'quarto-callout-note-color!8' },
  ['callout-caution']   = { border = 'quarto-callout-caution-color',   bg = 'quarto-callout-caution-color!8' },
}

function get_callout_type(div)
  for _, cls in ipairs(div.classes) do
    if colors[cls] then return cls end
  end
  return nil
end

function get_title(div)
  local title = div.attributes and div.attributes.title
  if not title or title == '' then return nil end
  return title
end

function number_title(callout_type, title)
  if not title then return nil end

  local prefix = title:match('^([^ ]+)')
  if not prefix then return title end

  local n = nil

  if callout_type == 'callout-tip' then
    axioma_count = axioma_count + 1
    n = axioma_count
  elseif callout_type == 'callout-important' then
    def_count = def_count + 1
    n = def_count
  elseif callout_type == 'callout-note' then
    if prefix == 'Método' then
      metodo_count = metodo_count + 1
      n = metodo_count
    else
      result_count = result_count + 1
      n = result_count
    end
  else
    -- caution (Demostración): no number
    return title
  end

  return prefix .. ' ' .. n .. title:sub(#prefix + 1)
end

function Div(div)
  local callout_type = get_callout_type(div)
  if not callout_type then return div end

  local col = colors[callout_type]
  local title = get_title(div)
  local numbered_title = number_title(callout_type, title)
  local is_proof = callout_type == 'callout-caution'

  -- Build tcolorbox LaTeX — no separate title background, just inline text
  local tcolorbox_opts = string.format(
    'enhanced, breakable, '
    .. 'colback=%s, colframe=%s, '
    .. 'boxrule=0pt, leftrule=4pt, '
    .. 'arc=0pt, outer arc=0pt, '
    .. 'left=8pt, right=8pt, top=8pt, bottom=8pt, '
    .. 'before skip=12pt, after skip=12pt',
    col.bg, col.border
  )

  local result = pandoc.List({})
  result:insert(pandoc.RawBlock('latex',
    string.format('\\begin{tcolorbox}[%s]', tcolorbox_opts)))

  -- Title as inline text (no separate header box)
  if numbered_title then
    local safe_title = numbered_title:gsub('%%', '\\%%')
    -- Extract \footnotemark if present (can't be inside \MakeUppercase)
    local has_footnotemark = safe_title:find('\\footnotemark')
    local clean_title = safe_title:gsub('\\footnotemark{}', '')
    local fmark = has_footnotemark and '\\footnotemark{}' or ''
    if is_proof then
      result:insert(pandoc.RawBlock('latex',
        string.format('{\\small\\itshape\\sffamily %s%s}\\par\\medskip', clean_title, fmark)))
    else
      result:insert(pandoc.RawBlock('latex',
        string.format('{\\small\\bfseries\\sffamily\\MakeUppercase{%s}%s}\\par\\medskip', clean_title, fmark)))
    end
  end

  -- Insert content blocks
  for _, block in ipairs(div.content) do
    result:insert(block)
  end

  -- QED for proofs
  if is_proof then
    result:insert(pandoc.RawBlock('latex',
      '\\begin{flushright}{\\small\\itshape\\color{quarto-callout-caution-color} QED}\\end{flushright}'))
  end

  result:insert(pandoc.RawBlock('latex', '\\end{tcolorbox}'))

  return result
end
