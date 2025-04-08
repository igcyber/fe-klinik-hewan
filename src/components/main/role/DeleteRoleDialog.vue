<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  roleSelected: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits(['update:isDialogVisible'])
const dialogVisibleUpdate = val => {
  emit('update:isDialogVisible', val)
}

//default states
const warning = ref(null);
const success = ref(null);
const error_exists = ref(null);
const role_selected = ref(null);


//function to update request create new role
const deleted = async() => {
  try {
    const resp = await $api('/role/'+role_selected.value.id,{
      method: 'DELETE',
      onResponseError({response}){
        // console.log(response);
        error_exists.value = response._data.error || "Unexpected error occurred";
      }
    })
    console.log(resp)
    success.value = resp.message;
    setTimeout(() => {
      emit('update:isDialogVisible', false)
      emit('deleted')
    }, 1500)
    
  } catch (error) {
    console.log(error);
    error_exists.value = error
  }
};

onMounted( () => {
  role_selected.value = props.roleSelected;
  console.log(role_selected.value);
});

</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="500"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="refer-and-earn-dialog pa-3 pa-sm-11">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="emit('update:isDialogVisible', false)"
      />

      <VCardText class="pa-0">
        <div class="mb-6">
          <h4 class="text-h3 text-center" v-if="role_selected">
            Delete Role {{ role_selected.name }} ?
          </h4>
        </div>
        <!-- <h4 v-if="role_selected">Do you want to delete this role {{ role_selected.name }}</h4> -->
      </VCardText>

      <VCardText>
          <VAlert type="warning" class="mb-5" v-if="warning">
            <strong>{{ warning }}</strong>
          </VAlert>
          <VAlert type="error" class="mb-5" v-if="error_exists">
            <strong>Opps... Something Wrong</strong>
          </VAlert>
          <VAlert type="success" class="mb-5" v-if="success">
            <strong>{{ success }}</strong>
          </VAlert>
      </VCardText>
      
      <VBtn color="error" class="my-0" @click="deleted()">
        Yes, Delete
      </VBtn>
      
      <VBtn color="info" class="my-4" @click="emit('update:isDialogVisible', false)">
        No, Cancel
      </VBtn>

    </VCard>
  </VDialog>
</template>

<style lang="scss">
.refer-link-input {
  .v-field--appended {
    padding-inline-end: 0;
  }

  .v-field__append-inner {
    padding-block-start: 0.125rem;
  }
}
</style>
