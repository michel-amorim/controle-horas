<template>
  <q-drawer class="drawer-container" show-if-above>
    <q-list>
      <template v-for="group in groupedItems" :key="group.expansionName ?? group.label">
        <q-expansion-item v-if="'children' in group" header-class="header-expansao">
          <template #header>
            <q-item-section class="content-header-itens">
              <q-icon :name="`o_${group.iconExpansion}`" />
              <span>{{ group.expansionName }}</span>
            </q-item-section>
          </template>
          <template v-for="item in group.children" :key="item.label">
            <q-expansion-item
              v-if="'children' in item"
              :label="item.expansionName"
              header-class="header-expansao content-sub-grupo"
            >
              <template v-for="subItem in item.children" :key="subItem.label">
                <q-item
                  v-if="'name' in subItem"
                  :active="isActive(subItem.name!)"
                  active-class="item-ativo"
                  :to="{ name: subItem.name! }"
                  clickable
                  class="drawer-item content-item sub-grupo"
                >
                  <q-item-section>
                    <q-item-label style="font-size: 14px">{{ subItem.label }}</q-item-label>
                    <q-item-label>{{ subItem.caption }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-expansion-item>

            <q-item
              v-else
              :active="isActive(item.name!)"
              active-class="item-ativo"
              :to="{ name: item.name! }"
              clickable
              class="drawer-item content-item"
            >
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
                <q-item-label caption>{{ item.caption }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-expansion-item>
        <q-item
          v-else
          :active="isActive(group.name!)"
          active-class="item-ativo"
          :to="{ name: group.name! }"
          clickable
          class="drawer-item"
        >
          <q-item-section class="content-header-itens">
            <q-icon :name="`o_${group.icon}`" />
            <span>{{ group.label }}</span>
            <span>{{ group.caption }}</span>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
    <div class="footer absolute-bottom">
      <q-item>
        <q-item-section>
          <q-item-label> © {{ ano }} </q-item-label>
          <q-item-label> Ver. {{ version }}-alph </q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </q-drawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { DrawerProps } from './drawer-interface';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import type { Routename } from 'src/router/router-names';
import type { ControleHorasPermissoes } from 'src/@types/user/user-role-enum';
import { useUserStore } from 'src/stores/user-store';
import { version } from '../../../package.json';
import { anoAtual } from 'src/utils/data-utils';

const useStore = useUserStore();
const { roles } = storeToRefs(useStore);
const props = defineProps<DrawerProps>();

const route = useRoute();
const ano = anoAtual();

function isActive(routeName: Routename) {
  return route.name === routeName;
}

const groupedItems = computed(() => {
  return props.items.map((item) => {
    if ('children' in item) {
      return {
        expansionName: item.expansionName,
        iconExpansion: item.iconExpansion || 'view_module',
        children: item.children,
      };
    }
    return {
      name: item.name,
      label: item.label,
      icon: item.icon || '',
      caption: item.caption,
      iconColor: item.iconColor,
      roles: item.roles,
    };
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function hasRoles(targetRoles?: ControleHorasPermissoes[]) {
  const userRoles = roles.value || [];
  if (!targetRoles || targetRoles.length === 0) {
    return true;
  }
  return targetRoles.some((role) => userRoles.includes(role));
}
</script>

<style lang="scss" src="./drawer-styles.scss" />
