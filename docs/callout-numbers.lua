-- callout-numbers.lua
-- Auto-numera callouts de Quarto por tipo dentro de cada capítulo.
--   tip       → Axioma  (contador propio)
--   important → Definición (contador propio)
--   note      → Teorema / Lema / Proposición / Corolario (contador compartido)
--   caution   → Demostración (no se numera)
--
-- Soporta dos sintaxis de título:
--   title="Teorema — Foo"        → título como string plano
--   ## Teorema — Foo con $LaTeX$ → título como lista de inlines (preserva LaTeX)

local axioma_count  = 0
local def_count     = 0
local result_count  = 0
local metodo_count  = 0

function Callout(node)
  -- Obtener título como string para leer el prefijo
  local title_str
  local title_is_inlines = false

  if type(node.title) == 'string' then
    title_str = node.title
  elseif node.title ~= nil then
    title_str = pandoc.utils.stringify(node.title)
    title_is_inlines = true
  end

  if not title_str or title_str == '' then return node end

  -- Primer token antes del primer espacio = nombre del tipo (ej. "Axioma", "Teorema")
  local prefix = title_str:match('^([^ ]+)')
  if not prefix then return node end

  local n
  if node.type == 'tip' then
    axioma_count = axioma_count + 1
    n = axioma_count
  elseif node.type == 'important' then
    def_count = def_count + 1
    n = def_count
  elseif node.type == 'note' then
    if prefix == 'Método' then
      metodo_count = metodo_count + 1
      n = metodo_count
    else
      result_count = result_count + 1
      n = result_count
    end
  else
    return node
  end

  if title_is_inlines then
    -- Preservar los inlines (LaTeX, etc.): solo reemplazar el primer Str
    local inlines = node.title
    if inlines[1] and inlines[1].t == 'Str' then
      inlines[1] = pandoc.Str(prefix .. ' ' .. n)
    end
    node.title = inlines
  else
    -- Título plano: insertar número después del primer token
    node.title = prefix .. ' ' .. n .. title_str:sub(#prefix + 1)
  end

  return node
end
