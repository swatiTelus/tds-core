### Usage criteria

- `FootnoteLink` inherits their parent element’s text size and colour
- Avoid using `FootnoteLink` if there is only one annotation on a page. The annotation can be part of the content instead
- Must wrap `FootnoteLink` in a `Text`, `Heading`, or `DisplayHeading` component
- May be used in `PriceLockup`, see [FootnoteLink with PriceLockup](#/Typography?id=pricelockupWithFootnotelink)

```jsx
<Card>
  <Heading level="h4">For Non TELUS mobility customers</Heading>

  <Paragraph>$30 per month</Paragraph>

  <Paragraph>
    <Text>
      Includes unlimited nationwide calling and 5 voice features.
      <FootnoteLink number={[3, 4]} onClick={(number, ref) => {}} copy="en" />
    </Text>
  </Paragraph>
</Card>
```

### FootnoteLink and other TDS components

`FootnoteLink` works well with the following TDS components:

- [PriceLockup](#/Typography?id=pricelockup)
- [DisplayHeading](#/Typography?id=displayheading)
- [Heading](#/Typography?id=heading)
- [Text](#/Typography?id=text)

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={3}>
      <PriceLockup
        size="medium"
        topText="Starting at"
        price="25"
        rateText="/month"
        bottomText="$68 /month after 3 months"
        signDirection="left"
        footnoteLinks={<FootnoteLink number={[1, 2, 3]} onClick={(number, ref) => {}} copy="en" />}
      />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
