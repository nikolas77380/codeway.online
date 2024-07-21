'use client';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

import { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useCourse } from '@/src/context/CourseContext';

import style from './CourseLessons.style'

const CourseLessons = () => {

  const { course } = useCourse();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={style.mainCourseLessonsContainer}>
      <Typography variant='h5' component='span'>  
        Course Lessons
      </Typography>
      {course.lessons.map((lesson, index) => (
        <Box key={index} sx={style.accordionMainContainer}>
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
        </Box>
      ))}
    </Box>
  )
}

export default CourseLessons