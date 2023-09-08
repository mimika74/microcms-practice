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
    navigateTo('/contact/thanks');
};

const submitTO = () => {
  navigateTo('/contact/thanks');
}

const requiredValidation = (value: any) => !!value || '必ず入力してください'
const requiredValidation2 = (value: any) => !!value || 'チェックをお願いします。'


const items = [ 
                "aについて",
                "bについて", 
                "cについて",
                "dについて",
                "その他",
                ];
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
          <v-label for="field-name">お問い合わせの種類</v-label>
          <!-- <v-checkbox label="aについて" v-model="refForm.select" value="aについて" type="checkbox" />
          <v-checkbox label="bについて" v-model="refForm.select" value="bについて" type="checkbox" />
          <v-checkbox label="cについて" v-model="refForm.select" value="cについて" type="checkbox" />
          <v-checkbox label="dについて" v-model="refForm.select" value="dについて" type="checkbox" />
          <v-checkbox label="その他" v-model="refForm.select" value="その他" type="checkbox" /> -->
          <v-select
              v-model="refForm.select"
              :items="items"
              variant="outlined"
              ></v-select>
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
        <div class="parent">
            <div class="privacy-label">
                <NuxtLink to="/privacy">プライバシーポリシー</NuxtLink>を確認し、個人情報の取り扱いについて同意します。
            </div>
        </div>
        <div style="margin-bottom: 60px;">
            <v-checkbox
                class="child"
                v-model="refForm.privacy"
                :rules="[requiredValidation2]"
                value="同意します。"
                type="checkbox"
                required
                variant="outlined"
                on-icon="mdi-check-circle-outline"
                />
                <div class="privacy-label" style="margin-left:50px;">
                    同意します。
                </div>
        </div>
        <div class="form-button" style="text-align: center;">
            <button type="submit" :disabled="!refForm.privacy" class="contact-button" name="button">送信する</button>
        </div>
      </form>
    </v-sheet>
  </div>
</template>