// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent, h } from 'vue';
import { signProps } from './SignProps';

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.827 105.833"`;
const _Body = `<path d="M171.442 357.537h299.983v-300H171.442zm0 0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M179.932 349.047h283.003V66.027H179.932Zm0 0" style="fill:#237f52;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:4.42652" transform="translate(-60.48 -20.298)scale(.35278)"/><path d="M142.645 94.604c-15.804 0-27.928 12.791-27.928 28.595l.013.156.012.02 18.524 21.688c.021.025.047.044.07.067q.045.067.098.129a1.54 1.54 0 1 0 2.23-2.12c-.02-.027-.035-.055-.056-.08l-16.839-19.683h21.656v19.776h.006c.05.81.722 1.443 1.535 1.445a1.54 1.54 0 0 0 1.535-1.445h.006v-19.776h23.195l-18.275 20.942q-.03.038-.056.08-.06.053-.114.114a1.54 1.54 0 1 0 2.425 1.895q.035-.03.068-.063l19.515-22.364.483-.604-.008-.021.012-.156c0-15.804-12.302-28.595-28.106-28.595zm1.697 51.334-5.503 7.814-8.916-2.531 5.724 7.814-5.283 7.925 9.135-2.972 6.273 8.144-.55-10.345 9.355-3.302-9.355-2.532zm13.214 1.078a.54.54 0 0 0-.283.096l-6.058 4.249c-.333.233-.326.813.016 1.3l.313.447c.342.487.885.69 1.217.458l6.059-4.25c.333-.233.325-.813-.016-1.3l-.313-.447c-.256-.365-.626-.571-.935-.553m-34.02 5.503a.66.66 0 0 0-.38.13c-.23.118-.431.375-.52.706l-.122.452c-.141.524.051 1.029.432 1.132l4.975 1.34.042.008h.005c.379.109.804-.224.953-.747l.129-.45c.15-.522-.036-1.03-.415-1.138l-4.954-1.414a.5.5 0 0 0-.144-.02zm6.1 7.417a.5.5 0 0 0-.272.064l-5.99 3.43c-.329.188-.372.727-.096 1.208l.253.442c.275.482.762.718 1.091.53l5.99-3.43c.33-.188.373-.728.097-1.21l-.253-.441c-.207-.361-.532-.584-.82-.593m19.18 2.465c-.247.01-.513.13-.725.348l-.51.526c-.377.39-.436.94-.131 1.236l5.388 5.226c.305.295.854.22 1.232-.17l.51-.524c.377-.39.435-.94.13-1.236l-5.388-5.226a.67.67 0 0 0-.506-.18m-13.648 5.191c-.22-.008-.411.064-.523.217l-4.093 5.558c-.225.305-.046.816.4 1.145l.41.301c.447.33.988.348 1.212.043l4.093-5.558c.225-.305.046-.816-.4-1.145l-.41-.302a1.27 1.27 0 0 0-.69-.259m5.247.733q-.05 0-.1.005l-.467.04c-.54.046-.95.399-.916.792l.436 5.133c.033.393.495.672 1.036.626l.467-.04c.541-.045.95-.398.917-.791l-.436-5.134c-.032-.368-.44-.637-.937-.63z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.02856" transform="translate(-89.732 -81.922)"/>`;
const _DefaultDesc = `Rocket parachute flare`;
const _DefaultTitle = 'Rocket parachute flare';
const _DefaultWidth = `399.977`;
const _DefaultHeight = `400`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export const E049RocketParachuteFlare = defineComponent({
  name: 'E049RocketParachuteFlare',
  inheritAttrs: false,
  props: {
    ...signProps,
  },
  setup(props, { attrs }) {
    return () => {
      const descId = `iso-desc-e049-rocket-parachute-flare`;
      const titleId = `iso-title-e049-rocket-parachute-flare`;
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
