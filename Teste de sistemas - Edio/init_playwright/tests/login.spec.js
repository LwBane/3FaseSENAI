import { test, expect } from '@playwright/test'

test.describe('Testar tela de login', () => {

    // beforeEach roda antes de cada teste
    test.beforeEach(async ({ page }) => {
        await page.goto("/")
    })

    test("testar o login do usuário com sucesso", async ({ page }) => {
        // configurar o play para prencher os campos
        await page.fill('#username', 'admin')
        await page.fill('#password', 'admin')

        await page.click('button[type=submit]')

        // verificar se transicionou (aceitou login)
        await expect(page.locator('#welcome-title')).toContainText('Bem-vindo, Admin!')
    })

    test("testar com credenciais errada", async ({ page }) => {

        // configurar o play com campos errados
        await page.fill('#username', 'usuario_errado')
        await page.fill('#password', 'senha_errada')

        await page.click('button[type=submit]')

        // validar mensagem de erro
        await expect(page.locator('#error-message')).toContainText('Usuário ou senha inválidos')

        // garantir que continua na tela de login
        await expect(page.locator('#username')).toBeVisible()

    })


    test("testar o fluxo completo com sair e garantir que após sair ele esteja renderizado o login", async ({ page }) => {

    // realizar login
    await page.fill('#username', 'admin')
    await page.fill('#password', 'admin')

    await page.click('button[type=submit]')

    // validar login realizado
    await expect(page.locator('#welcome-title'))
        .toContainText('Bem-vindo, Admin!')

    // clicar no botão sair/logout
    await page.getByRole('button', { name: 'Sair' }).click()

    // validar se voltou para tela de login
    await expect(page.locator('#username')).toBeVisible()
    await expect(page.locator('#password')).toBeVisible()
    
})

}
)