import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
// import { IconButton, Stack } from '@mui/joy';

// import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
// import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
// import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
// import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export type MessageInputProps = {
    textAreaValue: string;
    setTextAreaValue: (value: string) => void;
    onSubmit: () => void;
};

export default function MessageInput(props: MessageInputProps) {
    const { textAreaValue, setTextAreaValue, onSubmit } = props;
    const textAreaRef = React.useRef<HTMLDivElement>(null);
    const handleClick = () => {
        if (textAreaValue.trim() !== '') {
            onSubmit();
            setTextAreaValue('');
        }
    };
    return (
        <Box sx={{ px: 2, pb: 3 }}>
            {/* <FormControl>
                <Textarea
                    placeholder="Send a message"
                    aria-label="Message"
                    ref={textAreaRef}
                    onChange={(e) => {
                        setTextAreaValue(e.target.value);
                    }}
                    value={textAreaValue}
                    minRows={3}
                    maxRows={10}
                    endDecorator={
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            flexGrow={1}
                            sx={{
                                py: 1,
                                pr: 1,
                                borderTop: '1px solid',
                                borderColor: 'divider',
                            }}
                        >

                            <Button
                                size="sm"
                                color="primary"
                                sx={{ alignSelf: 'center', borderRadius: 'sm' }}
                                endDecorator={<SendRoundedIcon />}
                                onClick={handleClick}
                            >
                                Send
                            </Button>
                        </Stack>
                    }
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
                            handleClick();
                        }
                    }}
                    sx={{
                        '& textarea:first-of-type': {
                            minHeight: 60,
                        },
                    }}
                />
            </FormControl> */}

            <FormControl>
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 'lg',
                        padding: 1,
                    }}
                >
                    <Textarea
                        placeholder="Send a message"
                        aria-label="Message"
                        ref={textAreaRef}
                        onChange={(e) => {
                            setTextAreaValue(e.target.value);
                        }}
                        value={textAreaValue}
                        minRows={3}
                        maxRows={10}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
                                handleClick();
                            }
                        }}
                        sx={{
                            flexGrow: 1,
                            '& textarea:first-of-type': {
                                minHeight: 40,
                            },
                            borderRadius: 'lg',
                        }}
                    />
                    <Button
                        size="sm"
                        color="primary"
                        sx={{
                            borderRadius: '50%',
                            minWidth: 40,
                            minHeight: 40,
                            padding: 0,
                            ml: 2,
                        }}
                        onClick={handleClick}
                    >
                        <SendRoundedIcon />
                    </Button>
                </Box>
            </FormControl>
        </Box>
    );
}