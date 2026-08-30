# Фрагменты реального исходного кода

В репозитории приведены небольшие безопасные фрагменты исходного проекта, чтобы на оценке можно было показать связь теории с кодом.

## ConfigManager

Реальный файл `complexos/core/config-manager.ts` содержит фабрику `createConfigManager`, которая получает `osconfig` и возвращает операции `get`, `set`, `dump`, `update`.

Это пример отдельной ответственности и работы с конфигурацией.

## ComplexOS entry point

Реальная точка входа `complexos/complexos.ts` запускает REPL и собирает зависимости приложения: ERP, devices, queue manager, order processor, media manager, config manager, API, watchdogs и диагностику.

Особенно важный для оценки фрагмент по смыслу:

```text
createOrderProcessor({
  bus,
  devices,
  erp,
  operatingModeManager,
  preferencesManager,
  queueManager,
  redis,
})
```

Здесь хорошо видно DI: обработчику передаются уже созданные зависимости.

## Coffee Machine Driver

`cm-drv/coffeemachine-drv.js` использует factory-подход и поддерживает разные реализации кофемашин: Eversys, WMF, DrinkX и fake.

Это можно использовать как пример абстракции и возможности подменять конкретную реализацию.

## Почему не загружен весь архив

Исходный релиз содержит environment-файлы и SSH-ключи. Поэтому в публичный учебный репозиторий нельзя бездумно переносить весь архив. Реальные секреты исключены намеренно; это часть корректной работы с Git и GitHub.
