import { Box, Button, Text, VStack, Input, Link } from "@chakra-ui/react";
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
          <Button leftIcon={<FaChartBar />} colorScheme="cyan">
            Generate Chart
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
