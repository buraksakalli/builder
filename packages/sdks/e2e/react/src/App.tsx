// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { RenderContent } from '@builder.io/sdk-react';
import { getContentForPathname } from '@builder.io/sdks-e2e-tests/specs';

// TODO: enter your public API key
const BUILDER_PUBLIC_API_KEY = 'f1a790f8c3204b3b8c5c1795aeac4660'; // ggignore

function App() {
  const content = getContentForPathname();
  return content ? (
    <RenderContent
      content={content}
      model="page"
      apiKey={BUILDER_PUBLIC_API_KEY}
    />
  ) : (
    <div>Content Not Found</div>
  );
}

export default App;
