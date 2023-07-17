<script setup lang="ts">
// const checked = ref(true)
// const isChecked2 = () => { checked.value = false }
// const isChecked = () => !isChecked

type Form = {
  name: string,
  email: string,
  company: string,
  detail: string,
};

const refForm = ref<Form>({
  name: '',
  email: '',
  company: '',
  detail: '',
})

const runtimeConfig = useRuntimeConfig();
const submitForm = async() => {
  const formId = runtimeConfig.public.formAction;
  const formData = new FormData();
    formData.append(runtimeConfig.public.formName, refForm.value.name);
    formData.append(runtimeConfig.public.formEmail, refForm.value.email);
    formData.append(runtimeConfig.public.formCompany, refForm.value.company);
    formData.append(runtimeConfig.public.formDetail, refForm.value.detail);
    await fetch (`https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'no-cors',
      body: formData,
      referrerPolicy: "no-referrer",
    })
    navigateTo('/contact/thanks');
};

</script>

<template>
  <div>
    <v-sheet height="100" class="my-20"></v-sheet>
     <v-sheet width="600" class="mx-auto">
      <v-label>お問い合わせ</v-label>
      <v-sheet height="20" class="my-20"></v-sheet>
      <v-form @submit.prevent="submitForm">
        <div>
          <v-label for="field-name"
            >お名前<span class="c-form__required">必須</span></v-label
          >
          <v-text-field
            v-model="refForm.name"
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
            v-model="refForm.email"
            placeholder="sample@gmail.com"
            type="email"
            required
          />
        </div>
        <div>
          <v-label for="field-name"
            >会社名・所属団体名<span>必須</span></v-label>
          <v-text-field
            v-model="refForm.company"
            placeholder="株式会社 山田"
            type="text"
            required
          />
        </div>
        <!-- <div>
          <v-label for="field-name"
            >お問い合わせの種類<span>必須</span></v-label>
            <v-radio-group
              required
            >
              <v-radio name="entry.1529464627" label="DX支援全般について" value="0"></v-radio>
              <v-radio label="アプリ開発について" value="2"></v-radio>
              <v-radio label="自社サービスについて" value="3"></v-radio>
              <v-radio label="採用・インターンシップについて" value="4"></v-radio>
              <v-radio name="entry.1529464627" label="その他" value="1"></v-radio>
            </v-radio-group>
        </div> -->
        <div>
          <v-label for="field-message">お問い合わせ内容</v-label>
          <v-textarea
            v-model="refForm.detail"
            placeholder="お問い合わせ内容"
            required
          ></v-textarea>
        </div>
        <!-- <div>
          <v-checkbox v-model="refForm.privacy" label="プライバシーポリシーに同意する"></v-checkbox>
        </div> -->
        <div>
          <v-btn type="submit">送信する</v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>