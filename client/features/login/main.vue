<template lang="pug">
  v-container.my-login(fluid fill-height)
    v-toolbar(
      color="primary"
      flat
      dark
      fixed
      app
      dense
    )
      v-btn(icon)
        img.my-login__logo(src='~/@/assets/images/logo.png' alt='VuePizza Logo')
    v-layout(justify-center align-center)
      v-flex.text-xs-center(xs12 lg6)
        v-layout(row wrap)
          v-flex(xs12)
            .my-login__logo-name
              img(src='~/@/assets/images/logo-name.svg' alt='VueExample')
          v-flex(xs12)
            .my-login__subheading.subheading
              | Examples by the Slice!
          v-flex(xs12)
            v-card.my-login__card
              v-card-title.my-login__card-title(primary-title)
                v-avatar(:size="100")
                  img(src='~/@/assets/images/profile.png' alt='Avatar')

              v-card-text
                v-form
                  v-text-field(
                    label='E-mail'
                    v-model='credentials.username'
                    required
                  )
                  v-text-field(
                    label='Password'
                    hint='At least 8 characters'
                    v-model='credentials.password'
                    min='8'
                    :append-icon="passwordHidden ? 'visibility' : 'visibility_off'"
                    @click:append='() => (passwordHidden = !passwordHidden)'
                    :type="passwordHidden ? 'password' : 'text'"
                    counter=''
                  )

              v-card-actions.my-login__card-actions
                v-btn(
                  :loading="loading"
                  @click="login()"
                  block
                  color='accent'
                  dark
                ) Login
</template>

<script>
import auth from '@/auth/helpers'

export default {
  name: 'LoginPage',

  data () {
    return {
      passwordHidden: true,
      credentials: {
        username: 'user@user.com',
        password: 'password'
      },
      loading: false
    }
  },

  methods: {
    login () {
      this.loading = true

      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }

      auth.login(credentials, 'dashboard')
        .then((res) => {
          this.loading = false
          if (res.data.errcode === -1) {
            alert(res.data.errmsg)
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .my-login
    background-color: #21CE99

    &__logo
      max-width: 46px
      padding-left: 12px
      padding-top: 4px

    &__logo-name

      img
        max-width: 200px
        width: 100%

    &__subheading
      color: white
      padding-top: 10px
      padding-bottom: 20px

    &__card
      max-width: 370px
      margin: 0 auto

    &__card-title
      justify-content: center

    &__card-actions
      justify-content: center

</style>
