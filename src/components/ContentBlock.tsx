interface ContentBlockProps {
  block_name: string,
  children?: any,
};

function ContentBlock({block_name, children}: ContentBlockProps) {

  return (
    <div className="layout-block" id={block_name} >
      { children }
    </div>
  );

};

export default ContentBlock;
