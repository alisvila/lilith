import React from "react";
import { FormControl } from '@mui/material';
import { Input , MenuItem , TextField ,InputAdornment} from '@mui/material'

export default function UserDetail(props : any) {
  // const userDetail = {...props.userDetail}

  return (
    <FormControl>
      {/* <div>UserDetail</div>
      <input name="Name" onChange={(e) => props.userDetailHandler(e)} /> */}
      <TextField 
          required
          id="Height"
          label="قد"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />
      <TextField 
          required
          id="Weight"
          label="وزن"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">کیلوگرم</InputAdornment>,
          }}
        />
      <TextField 
          required
          id="Height"
          label="محیط مچ دست غیر فعال"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />

      <TextField 
          required
          id=""
          label="میزان فعالیت"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        >
        {/* <MenuItem key={option.value} value={option.value}>
              {option.label}
        </MenuItem> */}
        </TextField>
      <TextField 
          required
          id="Height"
          label="نبض درحالت استراحت"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
        />
      <TextField 
          id="Height"
          label="محیط دور شکم"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />
      <TextField 
          id="Height"
          label="محیط دور لگن"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />
      <TextField 
          id="Height"
          label="فشار خون بالا"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}

        />
      <TextField 
          id="Height"
          label="فشار خون پایین"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}

        />
        
      <TextField 
          required
          id=""
          label=""
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />
        
      <TextField 
          required
          id="Height"
          label="زمان خواب در شبانه روز"
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">ساعت</InputAdornment>,
          }}
        />
        
      <TextField 
          required
          id=""
          label=""
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />
      <TextField 
          required
          id=""
          label=""
          type='number'
          defaultValue={180}
          onChange={(e) => props.userDetailHandler(e)}
          InputProps={{
            endAdornment: <InputAdornment position="start">سانتی متر</InputAdornment>,
          }}
        />
    </FormControl>
  );
}
