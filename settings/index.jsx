function colourChanger(props) {
  return (
    <Page>
      <Section
        title = {<Text bold align = "center">Text Colour</Text>}>
        <ColorSelect
          settingsKey="textColor"
          colors={[
            {color: 'red'},
            {color: 'blue'},
            {color: 'green'},
            {color: 'orange'},
            {color: 'purple'},
            {color: 'yellow'},
            {color: 'white'},
            {color: 'black'},
          ]}
        />
      </Section>
      
      <Section
        title = {<Text bold align = "center">Flag Color</Text>}>
        <ColorSelect
          settingsKey="flagColor"
          colors={[
            {color: 'red'},
            {color: 'deepskyblue'},
            {color: 'orange'},
            {color: 'green'},
            {color: 'white'},
            {color: 'mediumblue'}
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(colourChanger);