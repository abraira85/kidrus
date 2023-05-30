import React from "react";
import { Box, Button, FormGroup, TextField } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type SearchFieldProps = {}

const SearchField: React.FC<SearchFieldProps> = () => {
    return (
        <Box sx={{

        }}>
            <FormGroup sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap"
            }}>
                <TextField label="Search products" size="small" sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '14px',
                    lineHeight: '16px',
                    fontWeight: '600',
                    textAlign: 'center',
                    backgroundColor: "#fff",
                    color: '#E5745D',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                    }
                }} />
                <Button sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '14px',
                    lineHeight: '16px',
                    fontWeight: '600',
                    textAlign: 'center',
                    padding: '10px 20px',
                    border: '2px dashed #fff',
                    outline: '5px solid #E5745D',
                    backgroundColor: "#E5745D !important",
                    color: '#E5745D',
                    borderRadius: 0,
                    minWidth: 33,
                    width: 33,
                    height: 33,
                    margin: '4px 0 0 0'
                }}>
                    <FontAwesomeIcon icon={faSearch} color="#fff" />
                </Button>
            </FormGroup>
        </Box>
    )
}

export default SearchField;
