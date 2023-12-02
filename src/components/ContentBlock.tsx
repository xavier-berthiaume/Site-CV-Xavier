function ContentBlock({children}: any, block_name: string) {

  return (
    <div className="layout-block" id={block_name} >
      { children }
    </div>
  );

};

export default ContentBlock;
