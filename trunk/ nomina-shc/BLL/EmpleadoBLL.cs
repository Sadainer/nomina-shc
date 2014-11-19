using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Modelo;
using DTO;

namespace NominaBLL
{
    public class EmpleadoBLL
    {
        EmpleadoDAL Dal = new EmpleadoDAL();
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
        public EmpleadosDTO GetEmple(string id)
        {
            EmpleadosDTO Emp = new EmpleadosDTO();
            Mapper.CreateMap<empleados, EmpleadosDTO>();
            Mapper.Map(Dal.GetEmple(id), Emp);
            return Emp;

        }
    }
}
      