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
        method="POST"
        target="hidden_iframe"
        onsubmit="submitted=true;"
        >
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
              required
            >
              <v-radio name="entry.1529464627" label="DX支援全般について" value="0"></v-radio>
              <!-- <v-radio label="アプリ開発について" value="2"></v-radio>
              <v-radio label="自社サービスについて" value="3"></v-radio>
              <v-radio label="採用・インターンシップについて" value="4"></v-radio> -->
              <v-radio name="entry.1529464627" label="その他" value="1"></v-radio>
            </v-radio-group>
        </div>
        <div>
          <v-label for="field-message">お問い合わせ内容</v-label>
          <v-textarea
            name="entry.1592604032"
            placeholder="お問い合わせ内容"
            required
          ></v-textarea>
        </div>
        <div>
          <v-checkbox name="entry.455770905" label="プライバシーポリシーに同意する"></v-checkbox>
        </div>
        <div>
          <v-btn type="submit">送信する</v-btn>
        </div>
      </v-form>
    </v-sheet>
    <iframe
    name="hidden_iframe"
    id="hidden_iframe"
    style="display: none"
    onload="if(submitted){window.location='/contact/thanks';}"
    ></iframe>
  </div>
</template>