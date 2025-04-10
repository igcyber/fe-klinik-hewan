<script setup>
import DeleteStaffDialog from '@/components/main/staff/DeleteStaffDialog.vue';
import EditStaffDialog from '@/components/main/staff/EditStaffDialog.vue';
import { onMounted, watch } from 'vue';

// import data from '@/views/pages/table/datatable'

const data = ref([]);

const headers = [
  {
    title: 'No',
    key: 'id',
  },
  {
    title: 'Avatar',
    key: 'avatar',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Role',
    key: 'role_name',
  },
  {
    title: 'Document',
    key: 'document_full',
  },
  {
    title: 'Phone Number',
    key: 'phone',
  },
  {
    title: 'Options',
    key: 'actions',
  },
];

const searchQuery = ref(null);
const staff_selected = ref(null);
const staff_selected_delete = ref(null);
const isAddStaffDialogVisible = ref(false);
const isEditStaffDialogVisible = ref(false);
const isDeleteStaffDialogVisible = ref(false);

const list = async () => {
  const resp =  await $api('/staff?search='+(searchQuery.value ?? '' ), {
    method: 'GET',
    onResponseError({response}){
      console.log(response)
    }
  })
  console.log(resp);
  data.value = resp.users.data;
}

const editItem = (item) => {
  isEditStaffDialogVisible.value = true;
  staff_selected.value = item;
};

const deleteItem = (item) => {
  isDeleteStaffDialogVisible.value = true;
  staff_selected_delete.value = item;
};

const avatarText = value => {
  if(!value) 
  return ''
  const nameArray = value.split(' ')
  return nameArray.map(word => word.charAt(0).toUpperCase()).join('');
}

onMounted(() => {
  list();
});

// watch(isEditStaffDialogVisible, (event) => {
//   console.log(event);
//   if(event == false){
//     staff_selected.value = null;
//   } 
// });

// watch(isDeleteStaffDialogVisible, (event) => {
//   console.log(event);
//   if(event == false){
//     staff_selected_delete.value = null;
//   } 
// });

</script>

<template>
  <div>
    <VCard title="Staffs">
      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField
            v-model="searchQuery"
            placeholder="Search Staff"
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
            @click="isAddStaffDialogVisible = !isAddStaffDialogVisible"
          >
            Add Staff
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
        <template #item.avatar="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="32"
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              :variant="!item.avatar ? 'tonal' : undefined"
            >
              <VImg
                v-if="item.avatar"
                :src="item.avatar"
              />
              <span
                v-else
                class="text-sm"
              >{{ avatarText(item.name) }}</span>
            </VAvatar>
          </div>
        </template>
        <template #item.document_full="{ item }">
          <div class="d-flex align-center">
            <div class="d-flex flex-column ms-3">
              <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.n_document }}</span>
              <small>{{ item.type_document }}</small>
            </div>
          </div>
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

      <!-- <AddStaffDialog @added="list" v-model:is-dialog-visible="isAddStaffDialogVisible"/>
      <EditStaffDialog v-if="staff_selected" @updated="list" :staff-selected="staff_selected" v-model:is-dialog-visible="isEditStaffDialogVisible"/>
      <DeleteStaffDialog v-if="staff_selected_delete" @deleted="list" :staff-selected="staff_selected_delete" v-model:is-dialog-visible="isDeleteStaffDialogVisible"/> -->
    </VCard>
  </div>
</template>
