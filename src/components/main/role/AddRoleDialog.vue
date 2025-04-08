<script setup>
import { PERMISSIONS } from '@/utils/constants'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['update:isDialogVisible'])
const dialogVisibleUpdate = val => {
  emit('update:isDialogVisible', val)
}
//permissions from define constants
const LIST_PERMISSION = PERMISSIONS;

//default states
const role = ref(null);
const permissions = ref([]);
const warning = ref(null);
const success = ref(null);
const error_exists = ref(null);

//function to push element in array permissions
const addPermission = (permission) => {
  let INDEX = permissions.value.indexOf(permission);
  if(INDEX === -1){
    permissions.value.push(permission);
  }else{
    permissions.value.splice(INDEX, 1);
  }
  console.log(permissions.value);
}

//function to store request create new role
const store = async() => {
  warning.value = null;
  if(!role.value){
    warning.value = 'The role name must be filled in'
    return;
  }
  if(permissions.value.length == 0){
    warning.value = 'Please choose permission for the role'
    return;
  }

  let data = {
    name: role.value,
    permissions : permissions.value
  }

  try {
    const resp = await $api('/role',{
      method: 'POST',
      body: data,
      onResponseError({response}){
        // console.log(response);
        error_exists.value = response._data.error || "Unexpected error occurred";
      }
    })
    console.log(resp)
    if(resp.http_code == 403){
      warning.value = resp.message;
    }else{
      success.value = resp.message;
      setTimeout(() => {
        success.value = null;
        warning.value = null;
        role.value = null;
        permissions.value = [];
        emit('update:isDialogVisible', false)
        emit('added')
      }, 1500)
    }
  } catch (error) {
    console.log(error);
    error_exists.value = error
  }
}

</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="750"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="refer-and-earn-dialog pa-3 pa-sm-11">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="default"
        @click="emit('update:isDialogVisible', false)"
      />

      <VCardText class="pa-5">
        <div class="mb-6">
          <h4 class="text-h4 text-center mb-2">
            Create New Role
          </h4>
        </div>

        <VTextField
          label="Role"
          v-model="role"
          placeholder="Example: Administrator"
        />

      </VCardText>
      <VCardText>
          <p class="text-sm-body-1 text-center">
            Available Permissions
          </p>

          <VTable>   
            <thead>
              <tr>
                <th class="text-uppercase">
                  Menu
                </th>
                <th class="text-uppercase">
                  Permission
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in LIST_PERMISSION"
                :key="index"
              >
                <td>
                  {{ item.name }}
                </td>
                <td>
                  <ul>
                    <li v-for="(permission, key) in item.permissions" :key="key" style="list-style: none;">
                      <VCheckbox
                        :label="permission.name"
                        :value="permission.permission"
                        @click="addPermission(permission.permission)"
                      />
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </VTable>

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
      
      <VBtn color="primary" class="my-4" @click="store()">
        Submit
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
