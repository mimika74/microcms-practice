<script setup lang="ts">

type Form = {
  name: string,
  email: string,
  company: string,
  detail: string,
  select: string,
  privacy: string,
};

const refForm = ref<Form>({
  name: '',
  email: '',
  company: '',
  detail: '',
  select: '',
  privacy: '',
})

//refForm.value.privacy.toString()

//const privacy = ref();
// const flag = (privacy: any) => {
//     if(privacy) {
//         privacy = true
//     } else {
//         privacy = false
//     }
//   };
 //console.log(refForm.value.privacy);

//formData.append(runtimeConfig.public.formPrivacy, refForm.value.privacy.toString());

//formData.append(runtimeConfig.public.formSelect, refForm.value.select);

// その他 name="entry.872933283.other_option_response"
const runtimeConfig = useRuntimeConfig();
const submitForm = async() => {
  const formId = runtimeConfig.public.formAction;
  const formData = new FormData();
    formData.append(runtimeConfig.public.formName, refForm.value.name);
    formData.append(runtimeConfig.public.formEmail, refForm.value.email);
    formData.append(runtimeConfig.public.formCompany, refForm.value.company);
    formData.append(runtimeConfig.public.formDetail, refForm.value.detail);
    formData.append(runtimeConfig.public.formSelect, refForm.value.select);
    formData.append(runtimeConfig.public.formPrivacy, refForm.value.privacy);
    await fetch (`https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'no-cors',
      body: formData,
      referrerPolicy: "no-referrer",
    })
    //navigateTo('/contact/thanks');
};

const submitTO = () => {
  navigateTo('/contact/thanks');
}

const requiredValidation = (value: any) => !!value || '必ず入力してください'
const requiredValidation2 = (value: any) => !!value || 'チェックをお願いします。'
// const nameRules = (value: any) => {
//   if(value == true){
//     return '入力必須です。'
//   }
// }

</script>

<template>
  <div>
    <v-sheet height="100" class="my-20"></v-sheet>
     <v-sheet width="600" class="mx-auto">
      <v-label>お問い合わせ</v-label>
      <v-sheet height="20" class="my-20"></v-sheet>
      <form @submit.prevent="submitForm">
        <div>
          <v-label for="field-name"
            >お名前<span class="c-form__required">必須</span></v-label
          >
          <v-text-field
            v-model="refForm.name"
            :rules="[requiredValidation]"
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
            :rules="[requiredValidation]"
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
            :rules="[requiredValidation]"
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
              <label>DX支援全般について</label>
              <input type="radio" label="DX支援全般について" value="DX支援全般について" v-model="refForm.select" />
              <label>アプリ開発について</label>
              <input type="radio" label="アプリ開発について" value="アプリ開発について" v-model="refForm.select" />
              <label>その他</label>
              <input type="radio" label="その他" value="その他" v-model="refForm.select" />
            </v-radio-group>
             {{refForm.select}}
        </div>
        <div>
          <v-label for="field-message">お問い合わせ内容</v-label>
          <v-textarea
            v-model="refForm.detail"
            :rules="[requiredValidation]"
            placeholder="お問い合わせ内容"
            type="text"
            maxlength="1000"
            required />
        </div>
        <div>
          <v-checkbox :rules="[requiredValidation2]" type="checkbox" v-model="refForm.privacy" value="同意します" label="プライバシーポリシーに同意する" required></v-checkbox>
        </div>
        <div>
          <v-btn type="submit">送信する</v-btn>
        </div>
      </form>
    </v-sheet>
  </div>
</template>