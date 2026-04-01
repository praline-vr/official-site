const fetch = () => Response.redirect(Deno.env.get("REDIRECT_URL")!);
export default { fetch };
