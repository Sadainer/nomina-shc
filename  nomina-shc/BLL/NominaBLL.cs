using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Modelo;
using DTO;

namespace BLL
{
    public class NominaBLL
    {
        NominaDAL Dal = new NominaDAL();
        public string NuevoEmpleado(EmpleadosDTO Emp)
        {
            string res="Error al guardar";
            empleados em = new empleados();
            Mapper.CreateMap<EmpleadosDTO, empleados>();
            Mapper.Map(Emp, em);
            if (Dal.NuevoEmpleado(em)) {
                res = "Empleado guardado exitosamente";
            }
            return res;

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
      