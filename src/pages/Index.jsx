import { Box, Button, Text, VStack, Input, Link, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FaFileCsv, FaFileExcel, FaFileDownload, FaChartBar } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          uniDanalyst Dashboard
        </Text>

        <Box>
          <Text mb={2}>Import Data:</Text>
          <Button leftIcon={<FaFileCsv />} colorScheme="teal">
            CSV
          </Button>
          <Button leftIcon={<FaFileExcel />} colorScheme="green" ml={2}>
            Excel (XLSX)
          </Button>
          <Button leftIcon={<FaFileExcel />} colorScheme="orange" ml={2}>
            ODS
          </Button>
          <Button leftIcon={<FaFileCsv />} colorScheme="blue" ml={2}>
            Tab-Delimited
          </Button>
        </Box>

        <Box>
          <Text mb={2}>Download Data:</Text>
          <Button leftIcon={<FaFileDownload />} colorScheme="purple">
            Download CSV
          </Button>
        </Box>

        <Box>
          <Text mb={2}>Download Figures:</Text>
          <Button leftIcon={<FaFileDownload />} colorScheme="red">
            PNG
          </Button>
          <Button leftIcon={<FaFileDownload />} colorScheme="yellow" ml={2}>
            PDF
          </Button>
          <Button leftIcon={<FaFileDownload />} colorScheme="gray" ml={2}>
            TIFF
          </Button>
          <Button leftIcon={<FaFileDownload />} colorScheme="pink" ml={2}>
            JPEG
          </Button>
        </Box>

        <Box>
          <Text mb={2}>Visualizations:</Text>
          <Button leftIcon={<FaChartBar />} colorScheme="cyan" mr={2}>
            Generate Chart
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="blue" mr={2}>
            Line Plot
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="orange" mr={2}>
            Bar Chart
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="green">
            Scatter Plot
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="purple" mr={2}>
            Boxplot
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="pink" mr={2}>
            Violin Plot
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="yellow" mr={2}>
            Pareto Plot
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="red" mr={2}>
            Histogram
          </Button>
        </Box>

        <Box>
          <Text mb={2}>Statistical Analysis:</Text>
          <FormControl>
            <FormLabel>Dependent Variable:</FormLabel>
            <Input placeholder="Enter dependent variable" />
            <FormLabel mt={2}>Independent Variable:</FormLabel>
            <Input placeholder="Enter independent variable" />
            <FormLabel mt={2}>Type of Parametric Test:</FormLabel>
            <Select placeholder="Select test type">
              <option value="t-test">T-Test</option>
              <option value="anova">ANOVA</option>
              <option value="regression">Regression</option>
            </Select>
          </FormControl>
          <Button leftIcon={<FaChartBar />} colorScheme="green" mt={2}>
            Parametric Test
          </Button>
          <FormLabel mt={2}>Type of Non-Parametric Test:</FormLabel>
          <Select placeholder="Select test type" mt={2}>
            <option value="mann-whitney">Mann-Whitney U Test</option>
            <option value="wilcoxon">Wilcoxon Signed-Rank Test</option>
            <option value="kruskal-wallis">Kruskal-Wallis Test</option>
          </Select>
          <Button leftIcon={<FaChartBar />} colorScheme="orange" mt={4} ml={2}>
            Non-Parametric Test
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="purple" mt={2} ml={2}>
            Generate Visualization
          </Button>
        </Box>
        <Box>
          <Text mt={4}>For more complex data analysis, please use the R-based version of uniDanalyst.</Text>
          <Link href="https://github.com/yourgithubrepo/uniDanalyst" isExternal color="blue.500">
            Visit GitHub Repository
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
