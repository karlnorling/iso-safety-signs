// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M94.132 78.451a1.08 1.08 0 0 0-1.027.768l-.92 3.093c-.169.57.162 1.165.742 1.334l.254.075c.58.17 1.184-.153 1.353-.723l.92-3.093a1.074 1.074 0 0 0-.742-1.335l-.254-.074a1.1 1.1 0 0 0-.326-.045m-10.323.12q-.133.001-.268.039l-.186.052c-.573.16-.905.766-.742 1.356l.967 3.516c.162.591.755.937 1.328.777l.186-.052c.574-.161.905-.766.742-1.357l-.966-3.516a1.09 1.09 0 0 0-1.06-.815m17.747.626a1.5 1.5 0 0 0-.916.357l-4.555 3.847c-.62.522-.716 1.419-.217 2.01l.105.124c.5.59 1.4.646 2.018.123l4.555-3.846c.619-.523.715-1.42.216-2.01l-.104-.124a1.37 1.37 0 0 0-1.102-.481M88.66 80.383l-2.343 7.178-8.472.814 6.444 5.054-1.223 7.309 5.95-4.369 7.516 4.47-2.728-7.954 5.96-5.333-7.853-.16zm-11.761.388a1.43 1.43 0 0 0-1.19.623 1.43 1.43 0 0 0 .37 1.99l4.436 3.04a1.43 1.43 0 0 0 1.99-.37 1.43 1.43 0 0 0-.371-1.99l-4.436-3.04a1.43 1.43 0 0 0-.8-.253m-3.426 7.402a1.07 1.07 0 0 0-.978.608l-.083.174c-.254.539-.013 1.185.54 1.45l3.29 1.57c.553.265 1.203.044 1.457-.495l.082-.174c.254-.54.014-1.185-.539-1.45l-3.29-1.571a1.1 1.1 0 0 0-.48-.112m24.216 4.83a1.43 1.43 0 0 0-1.226.685 1.43 1.43 0 0 0 .474 1.967l4.587 2.808a1.43 1.43 0 0 0 1.968-.473 1.427 1.427 0 0 0-.474-1.967l-4.587-2.809a1.43 1.43 0 0 0-.742-.211m-15.92.62c-.235-.017-.606.08-1.155.142-1.08.122-2.577.494-4.617 1.031-7.3 1.924-19.6 6.92-28.507 18.517-15.098 19.659-14.933 43.14-14.933 43.14h11.983s-1.037-17.678 8.588-34.53c6.896-12.073 17.158-20.717 23.695-24.664 1.89-1.14 3.315-1.8 4.21-2.413.742-.51 1.182-.67 1.023-1.04-.053-.123-.145-.174-.287-.183m-1.012 3.198c-.372-.003-.76.192-1.018.55l-2.505 3.486c-.392.545-.325 1.257.15 1.594l.27.192c.474.338 1.172.17 1.564-.375l2.505-3.486c.392-.545.325-1.257-.15-1.594l-.269-.192a.95.95 0 0 0-.547-.175m10.814 2.926q-.151 0-.302.048l-.235.074a1.01 1.01 0 0 0-.673 1.26l.89 2.868a1 1 0 0 0 1.263.648l.235-.074a1.01 1.01 0 0 0 .673-1.259l-.89-2.868a.99.99 0 0 0-.961-.697m-4.6.256a1.43 1.43 0 0 0-1.42 1.12l-1.168 5.25a1.43 1.43 0 0 0 1.086 1.708 1.43 1.43 0 0 0 1.708-1.086l1.168-5.25a1.428 1.428 0 0 0-1.374-1.742" style="fill:#fff;fill-opacity:1;stroke-width:1.73527" transform="translate(-15.215 -64.535)"/>`;
const _DefaultDesc = `Survival craft distress signals`;
const _DefaultTitle = 'Survival craft distress signals';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E048SurvivalCraftDistressSignals = defineComponent({
  name: 'E048SurvivalCraftDistressSignals',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e048-survival-craft-distress-signals`;
      const titleId = `iso-title-e048-survival-craft-distress-signals`;
      const _w = props.width !== undefined ? _h(String(props.width)) : _DefaultWidth;
      const _ht = props.height !== undefined ? _h(String(props.height)) : _DefaultHeight;
      const resolvedTitle = props.title ?? _DefaultTitle;
      const resolvedDesc = props.description ?? _DefaultDesc;
      const svgHtml = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
      return h('span', {
        ...attrs,
        style: { display: 'contents', ...(typeof attrs.style === 'object' ? (attrs.style as Record<string, unknown>) : {}) },
        innerHTML: svgHtml,
      });
    };
  },
});
