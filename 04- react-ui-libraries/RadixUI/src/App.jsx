import { Flex, Text, Button , Heading , Link , Avatar , Popover , Box , TextArea , Checkbox  } from "@radix-ui/themes";

const App = () => {
	return (
		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Text>The quick brown fox jumps over the lazy dog.</Text>
      <Heading>The quick brown fox jumps over the lazy dog</Heading>
    <Heading as="h1">Level 1</Heading>
    <Heading as="h2">Level 2</Heading>
    <Heading as="h3">Level 3</Heading>
    <Link href="#">Sign up</Link>
<Flex gap="2">
	<Avatar
		src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
		fallback="A"
	/>
	<Avatar fallback="A" />
</Flex>
<Popover.Root>
	<Popover.Trigger>
		<Button variant="soft">
			<ChatBubbleIcon width="16" height="16" />
			Comment
		</Button>
	</Popover.Trigger>
	<Popover.Content width="360px">
		<Flex gap="3">
			<Avatar
				size="2"
				src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
				fallback="A"
				radius="full"
			/>
			<Box flexGrow="1">
				<TextArea placeholder="Write a comment…" style={{ height: 80 }} />
				<Flex gap="3" mt="3" justify="between">
					<Flex align="center" gap="2" asChild>
						<Text as="label" size="2">
							<Checkbox />
							<Text>Send to group</Text>
						</Text>
					</Flex>

					<Popover.Close>
						<Button size="1">Comment</Button>
					</Popover.Close>
				</Flex>
			</Box>
		</Flex>
	</Popover.Content>
</Popover.Root>


      <Button>Let's go</Button>
		</Flex>
	);
}
export default App

