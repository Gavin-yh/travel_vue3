export let getCity = (ctx, name) => ctx.$store.state[name]

export function headerWatch() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}