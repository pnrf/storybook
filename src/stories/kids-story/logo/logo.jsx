export const Logo = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px', border: '1px solid #D1D5E7', borderRadius: '6px', padding: '30px'}}>
      <span>1. в Header и в Footer десктопной версии сайта:</span>
      <div style={{display: 'flex', alignItems: 'center', borderRight: '1px solid #D1D5E7'}}>
        <img style={{width: '192px', height: '52px', paddingRight: '20px', borderRight: '1px solid #D1D5E7'}} src='https://raw.githubusercontent.com/pnrf/storybook/2fc11429488fcc37a1e898b8aa0fdff1dabc95da/src/stories/kids-story/logo/assets/logo.svg' alt="Логотип в Header" />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <span style={{paddingLeft: '10px'}}>width: 192px;</span>
          <span style={{paddingLeft: '10px'}}>heght: 52px;</span>
        </div>
      </div>

      <span style={{paddingTop: '20px'}}>2. в Header и в Footer мобильной версии сайта:</span>
      <div style={{display: 'flex', alignItems: 'center', borderRight: '1px solid #D1D5E7'}}>
        <img style={{width: '130px', height: '35px', paddingRight: '20px', borderRight: '1px solid #D1D5E7'}} src='https://raw.githubusercontent.com/pnrf/storybook/2fc11429488fcc37a1e898b8aa0fdff1dabc95da/src/stories/kids-story/logo/assets/logo.svg' alt="Логотип в Header" />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <span style={{paddingLeft: '10px'}}>width: 130px;</span>
          <span style={{paddingLeft: '10px'}}>heght: 35px;</span>
        </div>
      </div>
    </div>
  )
}
