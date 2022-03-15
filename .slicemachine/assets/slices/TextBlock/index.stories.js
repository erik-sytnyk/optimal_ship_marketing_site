import MyComponent from '../../../../slices/TextBlock';

export default {
  title: 'slices/TextBlock'
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'text_block',
      items: [],
      primary: {
        title: [{type: 'heading1', text: 'Cultivate web-enabled platforms', spans: []}],
        description: [
          {
            type: 'paragraph',
            text:
              'Eiusmod labore laboris consectetur anim voluptate aute proident non qui irure. Ea id est et sit et adipisicing laboris commodo.',
            spans: []
          }
        ]
      },
      id: '_Default'
    }}
  />
);
_Default.storyName = 'Default';
