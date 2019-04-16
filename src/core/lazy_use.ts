import Vue from 'vue';
import VueStorage from 'vue-ls';
import config from '@/config/default-settings';

// base library
import '@/core/lazy_lib/components_use';

import Viser from 'viser-vue';

// ext library
import VueClipboard from 'vue-clipboard2';

import PermissionHelper from '@/utils/helper/permission';

VueClipboard.config.autoSetContainer = true;

Vue.use(Viser);

Vue.use(VueStorage, config.storageOptions);
Vue.use(VueClipboard);
Vue.use(PermissionHelper);
