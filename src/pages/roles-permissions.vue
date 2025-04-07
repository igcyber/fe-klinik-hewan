<script setup>
import { onMounted } from 'vue';

// import data from '@/views/pages/table/datatable'

const data = ref([]);

const headers = [
  {
    title: 'No',
    key: 'id',
  },
  {
    title: 'Role',
    key: 'name',
  },
  {
    title: 'Permissions',
    key: 'permissions_pluck',
  },
  {
    title: 'Creted At',
    key: 'created_at',
  },
  {
    title: 'Options',
    key: 'actions',
  },
];

const searchQuery = ref(null);
const isAddRoleDialogVisible = ref(false);

const list = async () => {
  const resp =  await $api('/role?search='+(searchQuery.value ?? '' ), {
    method: 'GET',
    onResponseError({response}){
      console.log(response)
    }
  })
  console.log(resp);
  data.value = resp.roles;
}

const editItem = (item) => {

};

const deleteItem = (item) => {

};

onMounted(() => {
  list();
});

</script>

<template>
  <div>
    <VCard title="Roles & Permissions">
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField
            v-model="searchQuery"
            placeholder="Search Role"
            style="inline-size: 400px;"
            density="compact"
            class="me-3"
            @keyup.enter="list"
          />
        </div>
  
        <VSpacer />
  
        <div class="d-flex gap-x-4 align-center">
          <VBtn
            color="primary"
            prepend-icon="ri-add-line"
            @click="isAddRoleDialogVisible = !isAddRoleDialogVisible"
          >
            Add Role
          </VBtn>
        </div>
      </VCardText>
      <VDataTable
        :headers="headers"
        :items="data"
        :items-per-page="5"
        class="text-no-wrap"
      >
        <template #item.id="{ item }">
          <span class="text-h6">{{ item.id }}</span>
        </template>
        <template #item.permissions_pluck = "{ item }">
          <ul>
            <li v-for="(permission, index) in item.permissions_pluck" :key="index">
              {{ permission }}
            </li>  
          </ul>
        </template>
        <template #item.actions="{ item }">
          <div class="d-flex gap-1">
            <IconBtn
              size="small"
              @click="editItem(item)"
            >
              <VIcon icon="ri-pencil-line"/>
            </IconBtn>
            <IconBtn
              size="small"
              @click="deleteItem(item)"
            >
              <VIcon icon="ri-delete-bin-line" />
            </IconBtn>
          </div>
        </template>
      </VDataTable>

      <AddRoleDialog v-model:is-dialog-visible="isAddRoleDialogVisible"/>
    </VCard>
  </div>
</template>
