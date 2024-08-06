'use client'

import { Box, Typography, TypographyProps  } from "@mui/material"
import { motion, MotionProps  } from "framer-motion"

const MotionBox = motion(Box);
const MotionTypography = motion<TypographyProps & MotionProps>(Typography);

export { MotionBox, MotionTypography }