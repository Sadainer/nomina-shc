using AutoMapper;
using DAL;
using DAL.Modelo;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NominaBLL
{
    public class CargosBLL
    {
        CargosDAL Dal = new CargosDAL();
        public List<CargosDTO> Get(string Nit)
        {
            List<CargosDTO> cargo = new List<CargosDTO>();
            Mapper.CreateMap<cargos, CargosDTO>();
            Mapper.Map(Dal.Get(Nit), cargo);
            return cargo;

        }
    }
}
