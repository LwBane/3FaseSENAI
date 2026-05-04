import { test, expect } from '@playwright/test'

test("implementar o contador de click", async ({ page }) => {

    // navegar até a home
    await page.goto('/')

    // localizar e instanciar o botão em uma variável
    const counterButton = page.getByRole('button')

    // Verificar se o button está renderizado na tela
    await expect(counterButton).toBeVisible()

    const quantidadeDeCliques = 20 // Aqui é onde altera o número máximo de cliques 

    for (let i = 1; i <= quantidadeDeCliques; i++) {
        await counterButton.click()
        await expect(counterButton).toHaveText(`Count is ${i}`)
    }

})


// ============ ANTES ============

// Clicar no botão
// await counterButton.click()

// // testar se o conteúdo do botão mudou de 0 para 1
// await expect(page.getByRole('button')).toContainText('Count is 1')

// // Clicar 5 vezes mais e testar se mudou para 6 o count

// await counterButton.click()
// await counterButton.click()
// await counterButton.click()
// await counterButton.click()
// await counterButton.click()

// // // Verificar se o conteúdo do botão está 'Count is 6'
// // await expect(page.getByRole('button')).toContainText('Count is 6')