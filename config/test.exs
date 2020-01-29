use Mix.Config

# Configure your database
config :svelte_rollup, SvelteRollup.Repo,
  username: "postgres",
  password: "postgres",
  database: "svelte_rollup_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :svelte_rollup, SvelteRollupWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
