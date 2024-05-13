// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Accordion from '@mui/material/Accordion'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import {AccordionDetails,InputLabel,Select,MenuItem} from '@mui/material'

// ** Third Party Imports

// ** Icons Imports
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// Styled component for the Box wrappers in Delivery Options' accordion

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import axios from 'axios'
import CardSnippet from 'src/@core/components/card-snippet'
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'
import { FormControl } from '@mui/material'
const brandsAndModels = [
  {
    brand: "Toyota",
    models: ["Corolla", "Camry", "Prius"]
  },
  {
    brand: "Ford",
    models: ["F-150", "Mustang", "Escape"]
  },
  {
    brand: "BMW",
    models: ["3 Series", "5 Series", "X5"]
  }
];
const CarAddition = () => {
  const { register, handleSubmit } = useForm();
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    setImagePreviewUrl(URL.createObjectURL(file));
  } else {
    setImagePreviewUrl('');
  }
};


 
  const onSubmit = async (data) => {
    try {
     
      const response = await axios.post('http://localhost:8000/api/v1/admin/createNewCar', {
       ...data,
        // carImages: carImagesUrls, // Assuming this is the correct field name
      });
  
      toast.success('Car created successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const [expanded, setExpanded] = useState('panel1')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-1'
          aria-controls='form-layouts-collapsible-content-1'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            SELECT CAR
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>

              <Grid item xs={6} sm={3}> 
              <FormControl fullWidth>
            <InputLabel id="brand-label">Brand</InputLabel>
            <Select
              labelId="brand-label"
              id="brand-select"
              // value={brand}
              // onChange={handleBrandChange}
              label="Brand"
              {...register('brand')}
            >
              <MenuItem value="">Select Brand</MenuItem>
              {brandsAndModels.map((brandData) => (
                <MenuItem key={brandData.brand} value={brandData.brand}>
                  {brandData.brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>              </Grid>
              <Grid item xs={6} sm={3}> 
              <FormControl fullWidth>
            <InputLabel id="brand-label">Model</InputLabel>
            <Select
              labelId="model-label"
              id="model-select"
              // value={model}
              // onChange={handlemodelChange}
              label="model"
              {...register('model')}
            >
              <MenuItem value="">Select model</MenuItem>
              {brandsAndModels.map((brandData) => (
                <MenuItem key={brandData.brand} value={brandData.brand}>
                  {brandData.brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>              </Grid>
 
            {/* <Grid item xs={6} sm={3}> */}
              {/* <TextField multiline rows={3} fullWidth label='Description' placeholder='description' {...register('description')} /> */}
            {/* </Grid> */}
            <Grid item xs={6} sm={3}>
            <FormControl fullWidth>
            <InputLabel id="version-label">Version</InputLabel>
            <Select
              labelId="version-label"
              id="version-select"
              // value={version}
              // onChange={handleversionChange}
              label="version"
              {...register('version')}
            >
              <MenuItem value="">Select version</MenuItem>
              {brandsAndModels.map((brandData) => (
                <MenuItem key={brandData.brand} value={brandData.brand}>
                  {brandData.brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>            </Grid>
            <Grid item xs={6} sm={3}>
            <FormControl fullWidth>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              id="year-select"
              // value={year}
              // onChange={handleyearChange}
              label="year"
              {...register('year')}
            >
              <MenuItem value="">Select year</MenuItem>
              {brandsAndModels.map((brandData) => (
                <MenuItem key={brandData.brand} value={brandData.brand}>
                  {brandData.brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>            </Grid>
        
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
           CAR SPECS
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
            <InputLabel id="colour-label">Available Colours</InputLabel>
            <Select
              labelId="colour-label"
              id="colour-select"
              // value={colour}
              // onChange={handlecolourChange}
              label="colour"
              {...register('colour')}
            >
              <MenuItem value="">Select colour</MenuItem>
              {brandsAndModels.map((brandData) => (
                <MenuItem key={brandData.brand} value={brandData.brand}>
                  {brandData.brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Car Features' placeholder='Car Features' {...register('carFeatures')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='GCC Specs' placeholder='GCC Specs' {...register('gccSpecs')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Transmission' placeholder='Transmission' {...register('transmission')} />
            </Grid>
          
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Cruise controls' placeholder='Cruise controls' {...register('cruiseControl')} />
            </Grid>
              <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Fuel Type' placeholder='Fuel Type' {...register('FuelType')} />
            </Grid>
              <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Engine Capacity' placeholder='Engine Capacity' {...register('engineCapacity')} />
            </Grid>
              <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Boot Capactiy' placeholder='Boot Capactiy' {...register('bootCapacity')} />
            </Grid>
            <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Interior Color' placeholder='Interior Color' {...register('interiorColor')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Exterior Color' placeholder='Exterior Color' {...register('exteriorColor')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Category' placeholder='Category' {...register('category')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Location' placeholder='Location' {...register('location')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Vehicle Type' placeholder='Vehicle Type' {...register('vehicleType')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Services' placeholder='Services' {...register('services')} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Description' placeholder='Description' {...register('description')} />
      </Grid>
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
         CAR PRICING
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                    Daily Charges
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                      <TextField fullWidth label='Charge Per Day' placeholder='chargePerDay' {...register('chargePerDay')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Available For Daily Rental' placeholder='availableForDailyRental' {...register('availableForDailyRental')} />
                    </Grid>

                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                   Weekly Charges
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                  <Grid item xs={12} sm={3}>
                      <TextField fullWidth label='Charge Per Week' placeholder='chargePerWeek' {...register('chargePerWeek')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Available For Weekly Rental' placeholder='availableForWeeklyRental' {...register('availableForWeeklyRental')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
              <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Extra Mileage Cost' placeholder='extraMileageCost' {...register('extraMileageCost')} />
            </Grid>
              <Grid item xs={12} sm={3}>
              <TextField fullWidth label='CDW Insurrance Per Day' placeholder='cdwInsurancePerDay' {...register('cdwInsurancePerDay')} />
            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
          RENTAL TERMS
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Security Deposit' placeholder='Security Deposit' {...register('securityDeposit')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Excess Claim Amount' placeholder='Excess Claim Amount' {...register('excessClaimAmount')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Delivery & Pick-up Charges' placeholder='Delivery & Pick-up Charges' {...register('deliveryAndPickUpCharges')} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label='Special Note for Customers' placeholder='Special Note for Customers' {...register('specialNoteForCustomers')} />
            </Grid>
            
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          id='form-layouts-collapsible-header-2'
          aria-controls='form-layouts-collapsible-content-2'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
         MONTHLY PRICING
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: 0 }} />
        <AccordionDetails>
          <Grid container spacing={5}>
          
         
            <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                   1 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='One Month Charge' placeholder='oneMonthCharge' {...register('oneMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
              <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                   3 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Three Month Charge' placeholder='threeMonthCharge' {...register('threeMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
              <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                  6 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Six Month Charge' placeholder='sixMonthCharge' {...register('sixMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
              <Grid item xs={12} sm={6}>
            <Accordion>
                <AccordionSummary
                  expandIcon={<ChevronDown />}
                  id='variant-sizes-collapsible-header'
                  aria-controls='variant-sizes-collapsible-content'
                >
                  <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                   9 Month Charge
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Nine Month Charge' placeholder='NineMonthCharge' {...register('NineMonthCharge')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: 0 }} />
      </Accordion>

<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
  <AccordionSummary
    expandIcon={<ChevronDown />}
    id='form-layouts-collapsible-header-6'
    aria-controls='form-layouts-collapsible-content-6'
  >
    <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
      ADD IMAGES
    </Typography>
  </AccordionSummary>
  <Divider sx={{ m: 0 }} />
  <AccordionDetails>
    <Grid container spacing={5}>
    <Grid item xs={12}>
         
            <FileUploaderMultiple />
    </Grid>
    </Grid>
  </AccordionDetails>
</Accordion>

      <AccordionDetails>
        <Button size='large' type='submit' variant='contained' sx={{ mr: 4 }}>
          Add Car
        </Button>
        <Button size='large' variant='outlined'>
          Cancel
        </Button>
      </AccordionDetails>
    </form>
  );
};

export default CarAddition;