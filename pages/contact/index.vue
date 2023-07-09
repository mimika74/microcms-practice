<script setup lang="ts">
const checked = ref(true)
const isChecked2 = () => { checked.value = false }
const isChecked = () => !isChecked
let submitted = false;
</script>

<template>
  <div>
    <v-sheet height="100" class="my-20"></v-sheet>
     <v-sheet width="600" class="mx-auto">
      <v-label>お問い合わせ</v-label>
      <v-sheet height="20" class="my-20"></v-sheet>
      <v-form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeYWykUKRk5YHXwTK6SvMDcDmstgQ-OVOP2d-JWfV0qingKGA/formResponse"
        method="POST">
        <div>
          <v-label for="field-name"
            >お名前<span class="c-form__required">必須</span></v-label
          >
          <v-text-field
            name="entry.791258032"
            label="お名前"
            placeholder="株式会社 山田"
            type="text"
            required
          />
        </div>
        <div>
          <v-label for="field-mail"
            >メールアドレス<span>必須</span></v-label
          >
          <v-text-field
            name="entry.1490479668"
            placeholder="sample@gmail.com"
            type="email"
            required
          />
        </div>
        <div>
          <v-label for="field-name"
            >会社名・所属団体名<span>必須</span></v-label>
          <v-text-field
            name="entry.38552790"
            placeholder="株式会社 山田"
            type="text"
            required
          />
        </div>
        <div>
          <v-label for="field-name"
            >お問い合わせの種類<span>必須</span></v-label>
            <v-radio-group
              name="entry.558724243"
              required
            >
              <v-radio label="DX支援全般について" value="1"></v-radio>
              <v-radio label="アプリ開発について" value="2"></v-radio>
              <v-radio label="自社サービスについて" value="3"></v-radio>
              <v-radio label="採用・インターンシップについて" value="4"></v-radio>
              <v-radio label="その他" value="5"></v-radio>
            </v-radio-group>
        </div>
        <div>
          <v-label for="field-message">メッセージ内容</v-label>
          <v-textarea
            name="entry.1592604032"
            placeholder="お問い合わせ内容"
            required
          ></v-textarea>
        </div>
        <div>
          <v-btn type="submit">送信する</v-btn>
        </div>
      </v-form>
    </v-sheet>
    <!-- <form>
      <v-text-field
        v-model="state.name"
        :error-messages="v$.name.$errors.map(e => e.$message)"
        :counter="10"
        label="Name"
        required
        @input="v$.name.$touch"
        @blur="v$.name.$touch"
      ></v-text-field>

      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map(e => e.$message)"
        label="E-mail"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>

      <v-select
        v-model="state.select"
        :items="items"
        :error-messages="v$.select.$errors.map(e => e.$message)"
        label="Item"
        required
        @change="v$.select.$touch"
        @blur="v$.select.$touch"
      ></v-select>

      <v-checkbox
        v-model="state.checkbox"
        :error-messages="v$.checkbox.$errors.map(e => e.$message)"
        label="Do you agree?"
        required
        @change="v$.checkbox.$touch"
        @blur="v$.checkbox.$touch"
      ></v-checkbox>

      <v-btn
        class="me-4"
        @click="v$.$validate"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form> -->
  </div>
</template>