import Vue from 'vue';

import { dateTimeToDate } from './datetime-to-date';

Vue.filter('date', dateTimeToDate);
