import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
export default function TermsConditionsForm(props) {
    
    return (

        <div >
            
            <Box component="div" m={8} align="left">
            Üyelik Sözleşmesi
"Tarafınızla yapılan üyelik sözleşmesi, sözleşme kurulduğu tarihten üyeliğiniz sona erene kadar tarafımızca elektronik ortamda saklanacaktır. İşbu sözleşme kurulduktan sonra sözleşme metni tarafınıza ait elektronik postaya gönderilecektir. Tarafınızca bu sözleşmenin saklanması önemle rica olunur."
 
UygunuSec.com KULLANIM KOŞULLARI ve ÜYELİK SÖZLEŞMESİ
İşbu üyelik sözleşmesinin konusu, uygunusec.com adlı sitede sunulan hizmetlerin ve bu hizmetlerden yararlanma şartları ile aşağıda belirtilen tarafların hak ve yükümlülüklerinin belirlenmesidir.
1.	TARAFLAR
uygunusec.com adlı internet sitesinden (bundan böyle uygunusec.com olarak anılacaktır) hizmet almak amacıyla üyelik talebi ile imzalamak olduğunuz işbu üyelik sözleşmesi (bundan böyle “SÖZLEŞME” olarak anılacaktır). Camadan Sigorta Aracılık Hizmetleri Ticaret Ltd.Şti. ile siteye üye olan ve herhangi bir şekilde site içeriğine ulaşan kullanıcının sitede sağlanan hizmetlerden yararlanabilmesi amacıyla düzenlenmiş olup, ilgili sitenin bulunduğu elektronik ortamda, KULLANICI veya ÜYELER tarafından onaylanması anında hüküm ifade edecektir.
2.	KULLANIM KOŞULLARI
2.1 ÜYELER VE KULLANICILAR uygunusec.com sitesini kullanım konusunda bilgilendirme amacı taşıyan aşağıda yazılı koşulları okuduğunu ve bu koşullara peşinen uyacağını kabul etmiş sayılmaktadır

            </Box>          
            {(props.formik.touched.isTermChecked && Boolean(props.formik.errors.isTermChecked))?
                <Alert severity="error">Lütfen Şartlar ve Koşulları kabul edin </Alert>
            :
                ''
            }
            <Typography variant="h6" align="center">
            şartlar ve Koşullar  
                 <Checkbox 
                          name="isTermChecked"
                          checked={props.formik.values.isTermChecked}
                          onChange={props.formik.handleChange}
                          onBlur={props.formik.handleBlur}                                    
                          inputProps={{ 'aria-label': 'primary checkbox' }} />  
            </Typography>
        </div>
    )
}
