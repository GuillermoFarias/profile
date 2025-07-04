export default defineNuxtPlugin(() => {
    import('preline').then(() => {
        window.HSStaticMethods?.autoInit?.()
        window.HSThemeAppearance?.init?.()

        const router = useRouter()
        router.afterEach(() => {
            requestAnimationFrame(() => {
                window.HSStaticMethods?.autoInit?.()
            })
        })
    })
})
