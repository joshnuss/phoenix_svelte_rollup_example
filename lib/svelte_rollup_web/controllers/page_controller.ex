defmodule SvelteRollupWeb.PageController do
  use SvelteRollupWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
