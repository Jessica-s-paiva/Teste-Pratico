import superTest from 'superTest'
const UrlAPI = "http://localhost:3000"

describe('UrlAPI', () => {
    test('TESTAR ROTA USER', ()=>{
        return request(UrlAPI).get('/user')
        .then((resposta) =>{
                expect(resposta.statusCode).toBe(200)
        })
    })
})