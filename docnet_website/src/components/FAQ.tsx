import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FrequentlyAskedQuestions = {
  title: 'Frequently asked questions',
  questions: [
    {
      question:
      'How does Docnet ensure the security and privacy of my medical information?',
      answer:
        'Docnet prioritizes the security and privacy of your data. We use encryption and adhere to industry standards to protect your medical information. Access is strictly controlled, and we continuously monitor our systems for any potential vulnerabilities.'
    },
    {
      question:
      'Can I schedule appointments with specific doctors on Docnet?',
      answer:
        'Yes, you can choose from a list of qualified doctors and schedule appointments based on their availability. Docnet allows you to select doctors based on their specialties and expertise.'
    },
    {
      question:
      'What medical services can I access through Docnet?',
      answer:
        'Docnet offers a range of services including virtual consultations, prescription refills, medical advice, and access to medical records. You can consult with doctors for various health concerns that do not require physical examination.'
    },
    {
      question:
      'How do I pay for consultations and services on Docnet?',
      answer:
        'Payment for consultations and services on Docnet can be made securely online through our platform. We accept major credit cards and ensure that your payment information is handled with the highest level of security.'
    },
    {
      question:
      'Is Docnet covered by insurance plans?',
      answer:
        'Docnet partners with various insurance providers to offer coverage for telemedicine services. Please check with your insurance provider to confirm coverage details and reimbursement options.'
    }
  ]
}

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log(event);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%' }}>

        {
          FrequentlyAskedQuestions.questions.map((question, index) => (
            <Accordion
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}d-content`}
                id={`panel${index + 1}d-header`}
              >
                <Typography component="h3" variant="subtitle2">
                  {question.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                >
                  {question.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
        {/* <Accordion
          expanded={expanded === `panel${FrequentlyAskedQuestions.questions.length + 1}`}
          onChange={handleChange(`panel${FrequentlyAskedQuestions.questions.length + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${FrequentlyAskedQuestions.questions.length + 1}d-content`}
            id={`panel${FrequentlyAskedQuestions.questions.length + 1}d-header`}
          >
            <Typography component="h3" variant="subtitle2">
              Is there a way to reach out the customer support team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You can reach our customer support team by emailing
              <Link sx={{ cursor: 'pointer' }}> support@docnet.com </Link>
              or calling our toll-free number. We&apos;re here to assist you
              promptly.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Container>
  );
}
