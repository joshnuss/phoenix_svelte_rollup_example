defmodule SvelteRollup.Repo do
  use Ecto.Repo,
    otp_app: :svelte_rollup,
    adapter: Ecto.Adapters.Postgres
end
