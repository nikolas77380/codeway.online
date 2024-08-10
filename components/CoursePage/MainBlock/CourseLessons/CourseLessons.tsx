'use client';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useCourse } from '@/src/context/CourseContext';

import { MotionBox, MotionTypography } from '@/utils/motionElements';
import { scrollLeftToRight, scrollUp } from '@/utils/motionVariants';

import style from './CourseLessons.style'

const CourseLessons = () => {

  const { course } = useCourse();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={style.mainCourseLessonsContainer}>
      <MotionTypography 
        variant='h5' 
        component='span'
        initial='hidden'
        whileInView='visible'
        variants={scrollLeftToRight(0.6, 1.4)}
        viewport={{once: true}}
      >  
        Course Lessons
      </MotionTypography>
      {course.lessons.map((lesson, index) => (
        <MotionBox 
          key={index} 
          sx={style.accordionMainContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{once: true}}
          variants={scrollUp(index*0.4, 1.2)}
        >
          <Accordion 
            sx={style.accordion}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={
                <Box sx={{
                  ...style.accordionArrowContainer,
                  backgroundColor: expanded === `panel${index}` ? '#fff' : '#a855f7',
                }}>
                  <KeyboardArrowDownIcon sx={{
                    ...style.accordionArrowColor,
                    color: expanded === `panel${index}` ? '#a855f7' : '#fff',
                  }} />
                </Box>
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={style.accordionSummary}
            >
              <Typography component='span'>
                {lesson.lessonTopic}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <Typography variant='body1' component='p'>
                {lesson.lessonsList.map(list => (
                  <Box key={list.id} sx={style.listLessonsContainer}>
                    <Accordion sx={style.accordionList}>
                      <AccordionSummary
                        expandIcon={
                          <Box sx={{
                            ...style.accordionArrowContainer,
                            backgroundColor: expanded === `panel${index}` ? '#fff' : '#a855f7',
                          }}>
                            <KeyboardArrowDownIcon sx={{
                              ...style.accordionArrowColor,
                              color: expanded === `panel${index}` ? '#a855f7' : '#fff',
                            }} />
                          </Box>
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={style.accordionSummaryList}
                      >
                        <Typography component='span'>
                          {list.lessonName}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={style.accordionDetailsList}>
                      <Typography component='p'>
                        {list.lessonDescription}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </MotionBox>
      ))}
    </Box>
  )
}

export default CourseLessons