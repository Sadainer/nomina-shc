using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DTO;

namespace BLL
{
    public class NominaBLL
    {
        NominaDAL Dal = new NominaDAL();
        public void NuevoEmpleado(EmpleadosDTO Emp)
        {
            empleados em = new empleados();
            Mapper.CreateMap<EmpleadosDTO, empleados>();
            Mapper.Map(Emp, em);
            Dal.NuevoEmpleado(em);
            
        }
        public List<EmpleadosDTO> GetEmpleados()
        {
            List<EmpleadosDTO> Em = new List<EmpleadosDTO>();
            Mapper.CreateMap<empleados, EmpleadosDTO>();
            Mapper.Map(Dal.GetEmpleados(), Em);
            return Em;

        }
    }
}
      