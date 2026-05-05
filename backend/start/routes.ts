/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/', () => {
  return { hello: 'world' }
})

router.resource('cursos', '#controllers/cursos_controller').use('*', middleware.auth())
router.resource('alunos', '#controllers/alunos_controller').use('*', middleware.auth())
router.resource('disciplinas', '#controllers/disciplinas_controller').use('*', middleware.auth())
router.resource('matriculas', '#controllers/matriculas_controller').use('*', middleware.auth())
router.post('/transfer','#controllers/conta_controller.transfer')
// Matrículas
// router.get('matriculas', '#controllers/matriculas_controller.index')
// router.post('matriculas', '#controllers/matriculas_controller.store')
// router.delete('matriculas/:id', '#controllers/matriculas_controller.destroy')

// Rotas de autenticação (públicas)
router
  .group(() => {
    router.post('/register', '#controllers/auth_controller.register')
    router.post('/login', '#controllers/auth_controller.login')
    // Rotas protegidas de autenticação
    router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth())
    router.get('/me', '#controllers/auth_controller.me').use(middleware.auth())
    router.get('/tokens', '#controllers/auth_controller.tokens').use(middleware.auth())
    router.post('/tokens', '#controllers/auth_controller.createToken').use(middleware.auth())
  })
  .prefix('/auth')

/*router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessToken, 'store'])
        router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('/profile', [controllers.Profile, 'show'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())
  })
  .prefix('/api/v1')*/
