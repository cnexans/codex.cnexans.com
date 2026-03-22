-- callout-numbers.lua
-- Auto-numera callouts de Quarto por tipo dentro de cada capítulo.
--   tip       → Axioma  (contador propio)
--   important → Definición (contador propio)
--   note      → Teorema / Lema / Proposición / Corolario (contador compartido)
--   caution   → Demostración (no se numera)

local axioma_count = 0
local def_count    = 0
local result_count = 0

function Callout(node)
  -- Obtener título como string
  local title_str
  if type(node.title) == 'string' then
    title_str = node.title
  elseif node.title ~= nil then
    title_str = pandoc.utils.stringify(node.title)
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
    result_count = result_count + 1
    n = result_count
  else
    return node
  end

  -- Insertar número después del primer token
  node.title = prefix .. ' ' .. n .. title_str:sub(#prefix + 1)

  return node
end
