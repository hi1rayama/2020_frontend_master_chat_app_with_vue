<template>
  <div class="login-form">
    <h5 class="text-center">Chat Login</h5>
    <hr>
    <b-form @submit.prevent="onSubmit">
      <!--エラ-メッセージの表示 -->
      <b-alert variant="danger" :show="hasError">{{ error }} </b-alert>

      <b-form-group id="userInputGroup"
                    label="User Name"
                    label-for="userInput">
        <b-form-input id="userInput"
                      type="text"
                      placeholder="Enter user name"
                      v-model="userId"
                      autocomplete="off"
                      :disabled="loading"
                      required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit"
                variant="primary"
                class="ld-ext-right"
                v-bind:class="{ running: loading }"
                :disabled="isValid">
                Login <div class="ld ld-ring ld-spin"></div>
      </b-button>
    </b-form>
  </div>
</template>


<script>
//mapState,mapGettersはcomputed内に定義する
//mapActions,mapMutationsはmethods内に定義する
import { mapState, mapGetters, mapActions } from 'vuex'//vuexのヘルパーをインポートする

export default {
  name: 'login-form',
  data() {
    return {
      userId: '',
    }
  },
  computed: {
    isValid: function() {
      const result = this.userId.length < 3;
      return result ? result : this.loading
    },
    //ストアのstateのloadingとerrorにアクセスできる
    ...mapState([
      'loading',
      'error'
    ]),

    //ストアのゲッターをローカルの算出プロパティにマッピングさせる(store/index.js)
    ...mapGetters([
      'hasError'
    ])
  },

  methods: {
    //ストアのactionsのloginにアクセス可能(sotre/actions.js)
    ...mapActions([
      'login'
    ]),
    async onSubmit() {
      const result = await this.login(this.userId);
      if(result) {
        this.$router.push('chat');
      }
    }
  }
}
</script>
