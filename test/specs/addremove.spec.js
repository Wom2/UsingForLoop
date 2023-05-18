import Addremove from '../pageobjects/addremove.page.js'

describe ('My loop test', () => {
    it ('should automaticly open a number of elements', async () => {
      await Addremove.open()

      await (browser).pause(500)
            
      for (let elements = 0; elements < 5; elements++) {
        await (Addremove).addelement.click()
      }
      
      await expect(Addremove.children).toHaveChildren(5)

      for (let redshirts = 5; redshirts > 3; redshirts--) {
        await (Addremove).remove.click()
      }

      await expect(Addremove.children).toHaveChildren(3)

      await (browser).pause(1000) 
  })
})